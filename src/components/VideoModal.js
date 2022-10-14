import { useRef } from 'react'

const VideoModal = ({isVideoModal, setIsVideoModal}) => {
  const modalRef = useRef()

  const modalClose = (e) => {
    if (isVideoModal && modalRef.current === e.target) {
        setIsVideoModal(false);
    }else {
        setIsVideoModal(true);
    }
  }

  const modalCloseOutside = (e) => {
    if (isModalBasic && modalRef.current === e.target) {
        setIsModalBasic(false);
    } else if (buttonRef.current === e.target) {
        //"close" 버튼을 클릭 시
        setIsModalBasic(false);
    } else {
        setIsModalBasic(true);
    }
};

  return (
    <div
      className="fixed left-0 top-0 z-40 h-screen w-full bg-black/40"
      ref={modalRef}
      onClick={modalClose}
    >
      <div
        className="absolute left-1/2 top-[15%] h-2/3 w-2/3 min-w-[450px] max-h-[700px] -translate-x-1/2 rounded-lg border-2 border-gray-400 bg-white p-2 shadow-lg"
      >
        <video controls autoPlay loop className="h-full w-full focus:border-none">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
export default VideoModal
