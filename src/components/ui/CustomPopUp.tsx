import { ReactNode } from "react"

interface FilterPopupProps {
    setOpenModel : ( pramp : boolean)=>void
    openModel : boolean
    data ?: any 
    children ?: ReactNode
    styles ?: string
    position :  'right' | 'left' | 'center'
    selected ?: any
}

function CustomPopUp({setOpenModel , openModel , data , children , styles ,position , selected
} : FilterPopupProps) {
    function getPosition(){
        switch(position){
            case 'center' : 
                return 'justify-center '
                    case 'left':
                return 'justify-start'
                    case 'right' :
                return "justify-end"
        }
    }
    return (
      <div>         
      <div
        className={`fixed  inset-0 backdrop-brightness-90 cursor-pointer w-[100vw] h-[100vh] flex items-center z-50 ${getPosition()}`}
        onClick={() => setOpenModel(false)}
      >
        <div
          className={` absolute  ${styles ? styles : "bg-white rounded-[16px] max-w-[700px] w-[90%] h-[100vh] overflow-y-auto width-less-scroll"}`}
          
        >
         {/* content  */} 
        { children}
          {/* content end */}
        </div>
      </div>
    </div>
  )
}
export default CustomPopUp