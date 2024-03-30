import './Insert.css';
function Insert() {

    return (
        <>
            <div className="content-container">
                <div className="header">
                    <div className="title">
                        <span>Job Title</span>
                    </div>
                </div>
                <div className="mid">
                    <div className="loc">
                        <p className='LOC'>LOC</p>
                        <input type="text" name="data" className='loc-input' />
                    </div>
                    <div className="des">
                        <p className='DES'>Description</p>
                        <textarea name="des"  cols="30" rows="5" className='des-area'></textarea>
                    </div>
                    <div className="buttons">
                        <button>Edit</button>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Insert