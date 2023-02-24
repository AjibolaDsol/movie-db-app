function Error() {
    return (
        <div className="w-full py-8 px-10">
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">Oops! We can't find the page you're looking for</h2>
            </div>

            <p>You tried to request a page that doesn't exist. If you believe this to be in error</p>
        </div>
    );
}

export default Error;