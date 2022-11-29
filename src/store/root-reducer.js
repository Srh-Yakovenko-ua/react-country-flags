import {combineReducers} from 'redux';
import {themeReducer} from './theme/theme-reducer';
import {countriesReducers} from './countries/countries-reducers';
import {controlsReducer} from './controls/controls-reducer';
import {detailsRegion} from './details/details-reducers';

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducers,
    controls: controlsReducer,
    detail: detailsRegion,
})