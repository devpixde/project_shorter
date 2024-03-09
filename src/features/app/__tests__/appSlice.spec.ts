import appReducer, {
    AppState,
    toggleEditMode,
    edit,
    lock
} from '../appSlice';

describe('app reducer', () => {

    const initialStateFalse: AppState = {
        isEditMode: false
    };
    const initialStateTrue: AppState = {
        isEditMode: false
    };

    it('should show inital state', () => {
        expect(appReducer(undefined, {type: 'unknown'})).toEqual({
            isEditMode: false
        })
    });

    it('should toggle inital state', () => {
        expect(appReducer(initialStateFalse, toggleEditMode)).toEqual({
            isEditMode: true
        });
    });

    it('should set isEditMode to true', () => {
        expect(appReducer(initialStateTrue, edit )).toEqual({
            isEditMode: true
        })
        expect(appReducer(initialStateFalse, edit )).toEqual({
            isEditMode: true
        })
    });

    it('should set isEditMode to false', () => {
        expect(appReducer(initialStateTrue, lock )).toEqual({
            isEditMode: false
        })
        expect(appReducer(initialStateFalse, lock )).toEqual({
            isEditMode: false
        })
    });
});

