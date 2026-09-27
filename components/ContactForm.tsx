"use client";

import { useRef, useState, type FormEvent } from "react";
import { services } from "@/data/services";

type ContactValues = {
	name: string;
	email: string;
	projectType: string;
	budget: string;
	message: string;
};

type RequiredField = "name" | "email" | "message";
type FieldErrors = Partial<Record<RequiredField, string>>;

const initialValues: ContactValues = {
	name: "",
	email: "",
	projectType: "",
	budget: "",
	message: "",
};

function validateField(field: RequiredField, value: string): string | undefined {
	const trimmedValue = value.trim();

	if (!trimmedValue) {
		return `${field === "name" ? "Name" : field === "email" ? "Email" : "Message"} is required.`;
	}

	if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
		return "Enter a valid email address.";
	}

	return undefined;
}

export function ContactForm() {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState<FieldErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
	const submissionInProgress = useRef(false);

	function updateField(field: keyof ContactValues, value: string) {
		setValues((currentValues) => ({ ...currentValues, [field]: value }));
		if (field === "name" || field === "email" || field === "message") {
			setErrors((currentErrors) => ({ ...currentErrors, [field]: validateField(field, value) }));
		}
		if (status?.type === "error") setStatus(null);
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (submissionInProgress.current) return;

		const nextErrors: FieldErrors = {
			name: validateField("name", values.name),
			email: validateField("email", values.email),
			message: validateField("message", values.message),
		};
		setErrors(nextErrors);
		if (Object.values(nextErrors).some(Boolean)) return;

		submissionInProgress.current = true;
		setIsSubmitting(true);
		setStatus(null);

		const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
		try {
			if (!accessKey) throw new Error("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not configured.");

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({
					access_key: accessKey,
					...values,
					name: values.name.trim(),
					email: values.email.trim(),
					message: values.message.trim(),
					subject: `New project inquiry from ${values.name.trim()}`,
				}),
			});
			let result: { success?: boolean; message?: string } = {};
			try {
				result = (await response.json()) as { success?: boolean; message?: string };
			} catch {
				result = {};
			}

			const responseMessage = typeof result.message === "string" ? result.message : undefined;
			const safeResponseMessage = accessKey && responseMessage
				? responseMessage.split(accessKey).join("[redacted]")
				: responseMessage;

			if (process.env.NODE_ENV === "development") {
				console.info("[Web3Forms] response", {
					status: response.status,
					statusText: response.statusText,
					success: result.success,
					message: safeResponseMessage,
				});
			}

			if (!response.ok || !result.success) {
				throw new Error(safeResponseMessage || "Web3Forms rejected the submission.");
			}

			setStatus({ type: "success", message: "Thank you. Your project details have been sent successfully." });
			setValues(initialValues);
			setErrors({});
		} catch (error) {
			if (process.env.NODE_ENV === "development") {
				const errorMessage = error instanceof Error ? error.message : "Unknown submission error.";
				console.error("[Web3Forms] request failed", accessKey ? errorMessage.split(accessKey).join("[redacted]") : errorMessage);
			}
			setStatus({ type: "error", message: "We couldn’t send your message. Please try again." });
		} finally {
			submissionInProgress.current = false;
			setIsSubmitting(false);
		}
	}

	return (
		<form className="mt-10 space-y-6" onSubmit={handleSubmit} noValidate>
			<div className="grid gap-6 md:grid-cols-2">
				<label className="block text-sm font-medium">
					Name
					<input className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 outline-none placeholder:text-muted focus:border-foreground" type="text" name="name" placeholder="Your name" value={values.name} onChange={(event) => updateField("name", event.target.value)} required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
					{errors.name && <span id="contact-name-error" className="mt-2 block text-xs text-error" role="alert">{errors.name}</span>}
				</label>
				<label className="block text-sm font-medium">
					Email
					<input className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 outline-none placeholder:text-muted focus:border-foreground" type="email" name="email" placeholder="you@example.com" value={values.email} onChange={(event) => updateField("email", event.target.value)} required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
					{errors.email && <span id="contact-email-error" className="mt-2 block text-xs text-error" role="alert">{errors.email}</span>}
				</label>
			</div>
			<label className="block text-sm font-medium">Project Type<select className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 outline-none focus:border-foreground" name="projectType" value={values.projectType} onChange={(event) => updateField("projectType", event.target.value)}><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label>
			<label className="block text-sm font-medium">Budget <span className="font-normal text-muted">(optional)</span><input className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 outline-none placeholder:text-muted focus:border-foreground" type="text" name="budget" placeholder="Optional" value={values.budget} onChange={(event) => updateField("budget", event.target.value)} /></label>
			<label className="block text-sm font-medium">
				Message
				<textarea className="mt-2 min-h-32 w-full resize-y border-b border-line bg-transparent px-0 py-3 outline-none placeholder:text-muted focus:border-foreground" name="message" placeholder="Tell me a little about the project" value={values.message} onChange={(event) => updateField("message", event.target.value)} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />
				{errors.message && <span id="contact-message-error" className="mt-2 block text-xs text-error" role="alert">{errors.message}</span>}
			</label>
			<button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Sending..." : "Send Project Details"}</button>
			{status && <p className={`text-xs leading-5 ${status.type === "success" ? "text-success" : "text-error"}`} role={status.type === "success" ? "status" : "alert"} aria-live={status.type === "success" ? "polite" : "assertive"}>{status.message}</p>}
		</form>
	);
}