import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {ToggleButton} from "../ToggleButton";

describe('ToggleButton', () => {
    describe('Rendering', () => {
        const onFunc = jest.fn(() => {
            console.log('Mock on callback');
        });
        const offFunc = jest.fn(() => {
            console.log('Mock off callback');
        });
        const buttonOnContent = 'Toggle to off';
        const buttonOffContent = 'Toggle to On';

        it('should render a button with prop on = true', () => {
            const {container} = render(
                <div>
                    <ToggleButton buttonOffContent={buttonOffContent} buttonOnContent={buttonOnContent} onOn={onFunc} onOff={offFunc} on={true}></ToggleButton>
                </div>
            )
            const button = screen.getByTestId('toggle-button-on');
            expect(container.querySelectorAll('button').length).toEqual(1);
            expect(button).toBeInTheDocument();
            expect(screen.getByText(buttonOnContent)).toBeInTheDocument();
            expect(screen.queryByTestId('toggle-button-off')).not.toBeInTheDocument();
            fireEvent.click(button);
            expect(offFunc).toHaveBeenCalled();
        });

        it('should render a button with prop on = false', () => {
            const {container} = render(
                <div>
                    <ToggleButton buttonOffContent={buttonOffContent} buttonOnContent={buttonOnContent} onOn={onFunc} onOff={offFunc}  on={false}></ToggleButton>
                </div>
            )
            const button = screen.getByTestId('toggle-button-off');
            expect(container.querySelectorAll('button').length).toEqual(1);
            expect(button).toBeInTheDocument();
            expect(screen.getByText(buttonOffContent)).toBeInTheDocument();
            expect(screen.queryByTestId('toggle-button-on')).not.toBeInTheDocument();
            fireEvent.click(button);
            expect(onFunc).toHaveBeenCalled();
        });
    })
});