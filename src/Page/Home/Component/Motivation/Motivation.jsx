import React from 'react';
import { BiSolidCaretRightCircle } from "react-icons/bi";

const Motivation = () => {
    return (
        <div className="">
            <div
                className="bg-fixed"
                style={{
                    backgroundImage: "url('https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h4-parallax-1.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="max-w-7xl mx-auto text-start py-20 md:ms-25 lg:ms-80">
                    <h1 className="ubuntu-font ms-10 md:ms-0 md:text-7xl text-4xl font-bold mb-4">Improve your life</h1>
                    <p className="ubuntu-font ms-10 me-10 md:me-0 md:ms-0 text-lg text-gray-300 text-justify mb-8 max-w-lg">
                        Cum sociis Theme natoque penatibus et magnis dis parturient, montes neque sed ipsum nascetur ridiculus mus.
                    </p>

                    {/* Video Preview */}
                    <div className="relative max-w-2xl">
                        <img
                            className="w-full rounded-lg shadow-lg"
                            src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h4-video-button-backround-img-768x461.jpg"
                            alt="Video Preview"
                        />

                        {/* Play Button with Ping Animation */}
                        <button
                            onClick={() => document.getElementById('my_modal_2').showModal()}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <span className="relative inline-flex items-center justify-center">
                                {/* Ping circle behind */}
                                <span className="absolute inline-flex h-20 w-20 rounded-full bg-white opacity-30 animate-ping"></span>
                                {/* Play Icon in front */}
                                <BiSolidCaretRightCircle className="text-white text-6xl relative z-10" />
                            </span>
                        </button>
                    </div>

                    {/* Modal */}
                    <dialog
                        id="my_modal_2"
                        className="modal"
                        onClick={(e) => {
                            const dialog = document.getElementById('my_modal_2');
                            // Close the modal only if clicking outside the iframe content
                            if (e.target === dialog) dialog.close();
                        }}
                    >
                        {/* Modal Content */}
                        <div className="modal-box p-0 overflow-hidden z-50">
                            <div className="relative pb-[56.25%] h-0">
                                <iframe
                                    src="https://player.vimeo.com/video/185237076?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                    allowFullScreen
                                    title="SWEAT"
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Motivation;
