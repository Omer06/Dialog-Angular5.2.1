export class DialogInformation {
    title: string;
    text: string;
    private state: string;
    private open: boolean;
    yesProcess: any;
    noProcess: any;
    okProcess: any;
    params: Map<string, any>;
    input;

    constructor(title?: string, text?: string, state?: DialogState) {
        this.title = title;
        this.text = text;
        this.setState(state);
    }

    setState(state: DialogState): void {
        this.state = (state === DialogState.Window) ? 'Window' : (state === DialogState.Dialog) ? 'Dialog' : 'Input';
    }

    show(): void {
        this.open = true;
    }

    close(): void {
        this.open = false;
    }

    isOpen(): boolean {
        return this.open;
    }

    isState(state: string): boolean {
        return this.state === state;
    }

}

export enum DialogState { Dialog, Window, Input }
