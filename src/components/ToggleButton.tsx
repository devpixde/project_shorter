interface IProps {
    onState: boolean;
    onFunc: Function;
    offFunc: Function;
    className?: string;
    buttonOnContent?: string;
    buttonOffContent?: string;
}

export const ToggleButton = ({onState, onFunc, offFunc, className, buttonOnContent, buttonOffContent}: IProps) => {

    if (onState) {
        // on state of the button will call onOff
        return <button className={className} onClick={() => offFunc()} data-testid='toggle-button-on'>{buttonOnContent}</button>
    } else {
        // off state of the button will call onOn
        return <button className={className} onClick={() => onFunc()} data-testid='toggle-button-off'>{buttonOffContent}</button>
    }

};