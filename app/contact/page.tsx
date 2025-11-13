import PageWrapper from "@/components/MotionWrapper";

export default function Contact() {
    return (
        <PageWrapper>
            <section className="py-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contact</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Open to opportunities — feel free to reach out.</p>

                <div className="max-w-xl">
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 dark:text-gray-300">Phone</label>
                        <div className="mt-1 text-gray-900 dark:text-gray-100">+91-8962453292</div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 dark:text-gray-300">Email</label>
                        <div className="mt-1 text-gray-900 dark:text-gray-100">vik.rama@yahoo.com</div>
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 dark:text-gray-300">LinkedIn</label>
                        <a href="https://www.linkedin.com/in/vikramkumarverma/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400">linkedin.com/in/vikramkumarverma</a>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
