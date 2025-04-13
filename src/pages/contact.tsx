import { Layout } from "@/layout/Layout";
import {
	ContactFrame,
	ContactFormFrame,
} from "@/components/Contact/ContactStyles";
import { ContactContents, ContactForm } from "@/components/Contact/Contact";

export const Contact = () => {
	return (
		<Layout width={null} pageType="contact">
			<ContactFrame>
				<ContactContents />
				<ContactFormFrame>
					<ContactForm />
				</ContactFormFrame>
			</ContactFrame>
		</Layout>
	);
};

export default Contact;
