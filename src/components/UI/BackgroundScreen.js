import style from "./BackgroundScreen.module.css";
import { Call } from "@material-ui/icons";

const BackgroundScreen = ( { lable } ) => {
    return (
        <div className={ style.background }>
            <div className={ style.container }>
                <div className={ style.conact }>
                    <div className={ style.conactclass }>
                        <Call style={ { color: "white", fontSize: "20px" } } />
                        <span
                            style={ {
                                color: "white",
                                fontSize: "15px",
                                paddingLeft: "10px",
                                paddingBotton: "10px",
                            } }
                        >
                            +88 596 782 483
                        </span>
                    </div>
                </div>
                <span
                    className={ style.content }
                    style={ { fontSize: "40px", color: "white" } }
                >
                    { lable }
                </span>
                <span
                    className={ style.content }
                    style={ { fontSize: "20px", color: "white" } }
                >
                    Lorem Ipsum is simply{ " " }
                </span>
            </div>
        </div>
    );
};

export default BackgroundScreen;