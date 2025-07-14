export default function TermsAndConditions () {
    return (
        <div className={`min-h-screen bg-white py-20`}>
            <div className="max-w-3xl mx-auto px-4 py-8 border border-gray-200 rounded-lg px-20">
                {/* Header */}
                <header className="text-center mb-10 border-b pb-5">
                    <div className="text-2xl font-normal mb-2 text-black">Our Props</div>
                    <h1 className="text-3xl font-bold mb-2.5 text-black">Terms and Conditions</h1>
                    <p className="text-gray-600 text-sm mb-1">Effective Date: July 12, 2025</p>
                    <p className="text-gray-600 text-sm">Last Updated: July 12, 2025</p>
                </header>

                {/* Main Content */}
                <main className="prose prose-lg max-w-none">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6 font-thin">
                        <strong className="text-orange-600">Important:</strong> By accessing or using the OURPROPS platform Website, you agree to comply with and be
                        bound by these Terms and Conditions. If you do not agree with these terms, please do not use our
                        services.
                    </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4 pb-2.5 border-b border-gray-200">1. Email Collection and Use</h2>

                    <h3 className="text-md font-bold mb-2.5">Purpose of Email Collection</h3>
                    <p className="mb-4 text-gray-600 leading-relaxed">OURPROPS collects email addresses for purposes including but not limited to:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-600 leading-relaxed">
                        <li className="mb-2">Sending updates about the platform.</li>
                        <li className="mb-2">Sharing newsletters, promotional content, and product announcements.</li>
                        <li className="mb-2">Responding to user inquiries and providing customer support.</li>
                    </ul>

                    <h3 className="text-md font-bold mb-2.5">Consent</h3>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        By providing your email address, you consent to receive communications from OURPROPS.
                        You may opt-out at any time by clicking the unsubscribe link in our emails or contacting us at
                        info@ourprops.com .
                    </p>

                    <h3 className="text-md font-bold mb-2.5">Data Protection</h3>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        We are committed to protecting your privacy. Your email address will not be shared with third
                        parties without your consent, except as required by law or for essential service delivery (e.g.,
                        email marketing platforms). For more information, see our [Privacy Policy].
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4 pb-2.5 border-b border-gray-200">2. User Comments and Content Submission</h2>
                    <h3 className="text-md font-bold mb-2.5">User Responsibility</h3>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        Users are solely responsible for the content they post. By submitting a comment, you grant
                        OURPROPS a non-exclusive, royalty-free, worldwide license to use, reproduce, and display your
                        content on the platform.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4 pb-2.5 border-b border-gray-200">3. Limitation of Liability</h2>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        OURPROPS is not responsible for any damages arising from the use of user-submitted content or
                        reliance on information shared via email communication.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4 pb-2.5 border-b border-gray-200">4. Governing Law</h2>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        These terms are governed by and construed in accordance with the laws of Ghana, and any
                        disputes shall be subject to the exclusive jurisdiction of the courts of Ghana.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4 pb-2.5 border-b border-gray-200">5. Changes to Terms and Conditions</h2>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        OURPROPS may update these Terms and Conditions from time to time. Any changes will be
                        posted on this page with the updated date. Continued use of the website constitutes acceptance of
                        the revised terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4 pb-2.5 border-b border-gray-200">6. Contact Us</h2>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                        For any questions or concerns regarding these Terms and Conditions, please contact us at
                        info@ourprops.com .
                    </p>
                </section>
                </main>
            </div>
        </div>
    );
};