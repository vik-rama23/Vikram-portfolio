import MotionWrapper from "@/components/MotionWrapper";

export default function Contact() {
  return (
    <MotionWrapper>
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
      <p className="text-gray-700 mb-4">
        I’m always open to discussing new opportunities, collaborations, or tech ideas.
      </p>
      <div className="space-y-2">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:vik.rama@yahoo.com"
            className="text-blue-600 hover:underline"
          >
            vik.rama@yahoo.com
          </a>
        </p>
        <p>
          <strong>Mobile:</strong> +91-8962453292
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/vikramkumarverma/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/vikramkumarverma
          </a>
        </p>
        <p>
          <strong>Location:</strong> Pune, Maharashtra, India
        </p>
      </div>
    </section>
    </MotionWrapper>
  );
}
