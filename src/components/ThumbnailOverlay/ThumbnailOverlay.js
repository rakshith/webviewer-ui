import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import ActionButton from 'components/ActionButton';

import getClassName from 'helpers/getClassName';

import './ThumbnailOverlay.scss';

class ThumbnailOverlay extends React.PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.overlay = React.createRef();
    this.state = {

    };
  }

  render() {
    // const { left, right } = this.state;
    const { t } = this.props;
    const className = getClassName('Overlay ThumbnailOverlay', this.props);

    return (
      <div className={className} data-element="ThumbnailOverlay" ref={this.overlay}>
        <ActionButton dataElement="filePickerButton" label={t('action.openFile')} />
        <ActionButton dataElement="filePickerButton" label={t('action.openFile')} />
      </div>
    );
  }
}

export default withTranslation()(ThumbnailOverlay);
