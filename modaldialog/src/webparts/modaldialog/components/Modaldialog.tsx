import * as React from 'react';
import styles from './Modaldialog.module.scss';
import { IModaldialogProps } from './IModaldialogProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { autobind, DialogType } from 'office-ui-fabric-react';
import { IModalDialogState } from './IModalDialogState';
import { IFrameDialog } from "@pnp/spfx-controls-react/lib/IFrameDialog";

export default class Modaldialog extends React.Component<IModaldialogProps, IModalDialogState> {
  constructor(props: IModaldialogProps, state: IModalDialogState) {
    super(props);
    this.state = {
      shouldhide: true
    };
  }

  public render(): React.ReactElement<IModaldialogProps> {
    return (
      <div className={styles.modaldialog}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>

              <a className={styles.button} href="#" onClick={this._handleClick}>
                <span className={styles.label}>Learn more</span>
              </a>

              <IFrameDialog
                url="https://pnp.github.io/sp-dev-fx-controls-react/controls/IFrameDialog/"
                hidden={this.state.shouldhide}
                modalProps={{
                  isBlocking: true

                }}
                onDismiss={() => this.setState({ shouldhide: true })}
                dialogContentProps={{
                  type: DialogType.normal,
                  showCloseButton: true
                }}
                width={'600px'}
                height={'380px'} />

            </div>
          </div>
        </div>
      </div>
    );
  }

  @autobind
  private _handleClick() {
    this.setState({ shouldhide: !this.state.shouldhide });
  }
}
