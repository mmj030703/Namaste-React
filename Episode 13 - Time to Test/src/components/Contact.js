const Contact = () => (
    <div className="min-h-[68.7vh] flex flex-col items-center justify-center -translate-y-10">
        <div className="max-w-[700px]">
            <h1 className="text-center text-3xl font-bold">Feedback</h1>
            <form className="flex flex-col gap-y-4 mt-5 min-w-[300px]">
                <input type="text" placeholder="Name" className="outline outline-1 ps-1 py-1 pe-2" />
                <input type="email" placeholder="Email" className="outline outline-1 ps-1 py-1 pe-2" />
                <input type="email" placeholder="Message" className="outline outline-1 ps-1 py-1 pe-2" />
                <button type="submit" className="bg-slate-200 w-fit py-1 px-3 outline outline-1 self-center">Send Message</button>
            </form>
        </div>
    </div>
);

export default Contact;