import './Dialog.css'
const Dialog = ({dialog = 'Engage the enemy! 💥'}) => {
    return (
        <div className='Dialog'>
            <p>{dialog}</p>
        </div>
    )
};

export default Dialog;