import { ReactNode, useState, useEffect } from "react"

interface FilterPopupProps {
  setOpenModel: (pramp: boolean) => void
  openModel: boolean
  data?: any 
  children?: ReactNode
  styles?: string
  position: 'right' | 'left' | 'center'
  selected?: any
}

function CustomPopUp({
  setOpenModel,
  openModel,
  data,
  children,
  styles,
  position,
  selected
}: FilterPopupProps) {
  const [animatePopup, setAnimatePopup] = useState(false);

  useEffect(() => {
    if (openModel) {
      // Start the animation with a slight delay for smooth transition
      setTimeout(() => {
        setAnimatePopup(true);
      }, 50);
    } else {
      setAnimatePopup(false);
    }
  }, [openModel]);

  function getPosition() {
    switch (position) {
      case 'center':
        return 'justify-center';
      case 'left':
        return 'justify-start';
      case 'right':
        return 'justify-end';
    }
  }

  function getAnimation() {
    switch (position) {
      case 'center':
        return animatePopup ? "opacity-100 scale-100" : "opacity-0 scale-95";
      case 'left':
        return animatePopup ? "translate-x-0" : "-translate-x-full";
      case 'right':
        return animatePopup ? "translate-x-0" : "translate-x-full";
      default:
        return "";
    }
  }

  return (
    <div>
      <div
        className={`fixed inset-0 backdrop-brightness-90 cursor-pointer w-[100vw] h-[100vh] flex items-center z-50 ${getPosition()}`}
        onClick={() => setOpenModel(false)}
      >
        <div
          className={`absolute transition-all duration-300 ${getAnimation()} ${
            styles
              ? styles
              : "bg-white rounded-[16px] max-w-[700px] w-[90%] h-[100vh] overflow-y-auto width-less-scroll"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* content */}
          {children}
          {/* content end */}
        </div>
      </div>
    </div>
  );
}

export default CustomPopUp;