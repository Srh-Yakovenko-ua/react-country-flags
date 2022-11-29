export const selectCountriesInfo = state => {
    return {
        status: state.countries.status,
        error: state.countries.error,
        qty: state.countries.list.length,
    }
}

//export const selectAllCountries = state => state.countries.list
export const selectVisibleCountries = (state, {search = '', region}) => {
    return state.countries.list.filter(
        countries =>
            countries.name.toLowerCase().includes(search.toLowerCase())
            && countries.region.includes(region)
    )
}