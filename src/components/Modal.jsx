import { useContext } from "react";
import { MovieContext } from "../MovieContext";

const Modal = ({children}) => {

    const {isModalOpen, closeModal} = useContext(MovieContext);

    return (
        // All of this was modified from the Tailwind taken here: https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/modal-dialogs
        <>
            {!isModalOpen ? (<></>) :
            (
            <>
                <div className="relative z-10" role="dialog" aria-modal="true"></div>
                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:max-w-250">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">

                            <div className="modal-area">
                                {children}
                                <button className="exitbutton" type="button" onClick={closeModal}>Exit</button>
                            </div>
                            
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>
            )
            }
            

        </>
    );
}

export default Modal