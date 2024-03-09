interface IProps {
    on: boolean;
    children?: any;
    onOn: Function;
    onOff: Function;
    className?: string;
    buttonOnContent?: string;
    buttonOffContent?: string;
}

export const ToggleButton = ({on, children, onOn, onOff, className, buttonOnContent, buttonOffContent}: IProps) => {

    if (on) {
        // on state of the button will call onOff
        return <button className={className} onClick={() => onOff()} data-testid='toggle-button-on'>{buttonOnContent}</button>
    } else {
        // off state of the button will call onOn
        return <button className={className} onClick={() => onOn()} data-testid='toggle-button-off'>{buttonOffContent}</button>
    }

};