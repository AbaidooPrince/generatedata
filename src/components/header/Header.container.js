import React from 'react';
import { connect } from 'react-redux';
import * as initActions from '../../core/init/init.actions';
import * as initSelectors from '../../core/init/init.selectors';
import Header from './Header.component';

const mapStateToProps = (state) => ({
	selectedLocale: initSelectors.getLocale(state)
});

const mapDispatchToProps = (dispatch) => ({
	onChangeLocale: (locale) => dispatch(initActions.selectLocale(locale))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
