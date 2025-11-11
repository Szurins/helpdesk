const Footer = () => {
    return (
        <div className="bg-linear-to-r from-gray-900 to-gray-950 flex flex-row py-2 justify-center">
            <div className="flex flex-col items-center gap-1 text-gray-200">
                <p>Contact us: <a className="underline" href="mailto:helpdesk@help.com">helpdesk@help.com</a></p>
                <p className="flex flex-row gap-2">Follow us on:
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" aria-labelledby="fbTitle" role="img">
                        <title id="fbTitle">Facebook</title>
                        <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.1v-2.9h2.34V9.85c0-2.32 1.38-3.6 3.48-3.6.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.69-1.47 1.39v1.67h2.5l-.4 2.9h-2.1v7.03C18.34 21.2 22 17.06 22 12.07z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="igOutline" role="img" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <title id="igOutline">Instagram</title>

                        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />

                        <circle cx="12" cy="12" r="3.2" />

                        <circle cx="17.2" cy="6.8" r="0.9" fill="white" stroke="none" />
                    </svg>

                </p>
            </div>
        </div>
    )
}

export default Footer