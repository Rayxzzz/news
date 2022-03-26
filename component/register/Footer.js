const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-2 h-screen bg-purple-700 text-white">
                <div className="flex justify-center items-center">
                    <div className="text-xl mr-36">
                        <p className="mb-16">Why News Today</p>
                        <p className="mb-16">Be an author</p>
                        <p className="mb-16">Community</p>
                        <p >FAQ</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-xl ml-36 text-right">
                        <p className="mb-16 font-extrabold text-4xl">News Today</p>
                        <p>Jendral Sudirman Street No.23</p>
                        <p className="mb-8"> Jakarta, Indonesia</p>
                        <p className="mb-8">(621)989898934</p>
                        <p >newstoday@mail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer