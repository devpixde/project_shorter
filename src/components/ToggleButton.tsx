interface IProps {
    onState: boolean;
    onFunc: Function;
    offFunc: Function;
    className?: string;
    buttonOnContent?: string;
    buttonOffContent?: string;
    elementId: string;
}

export const ToggleButton = ({onState, onFunc, offFunc, className, buttonOnContent, buttonOffContent, elementId}: IProps) => {

    if (onState) {
        // on state of the button will call onOff
        return <button id={elementId} className={className} onClick={() => offFunc()} data-testid='toggle-button-on'>{buttonOnContent}</button>
    } else {
        // off state of the button will call onOn
        return <button id={elementId} className={className} onClick={() => onFunc()} data-testid='toggle-button-off'>{buttonOffContent}</button>
    }

};