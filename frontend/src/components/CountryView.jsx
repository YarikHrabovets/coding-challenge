import React from 'react'

const CountryView = ({ name, flags, capital, region, subregion, languages=['None'], currencies=['None'], 
                       population, latlng, area, borders=['None'], timezones=['None'], car, startOfWeek, maps=['None'] }) => {
    return (
        <div className='container shadow-lg p-5 mt-5 mb-5'>
            <div className='text-center'>
                <p className='fs-4 fw-bold'>{name['common']}( {Object.keys(name['nativeName']).map(item => name['nativeName'][item]['common'] + ' ')})</p>
                <img src={flags[0]['svg']} alt={flags[0]['alt']} className='county-img me-sm-5' />
                <img src={flags[1]['svg']} alt='Coat of arms' className='county-img' />
            </div>
            <hr />
            <div className='d-flex justify-content-center'>
                <div className='row row-cols-1 row-cols-md-2 g-md-3'>
                    <div className='col'>
                        <p className='mb-2'><span className='fw-semibold'>Capital: </span>{capital}</p>
                        <p className='mb-2'><span className='fw-semibold'>Region: </span>{region}</p>
                        <p className='mb-2'><span className='fw-semibold'>Subregion: </span>{subregion}</p>
                        <p className='fw-semibold mb-1'>Languages:</p>
                        <ul>
                            {Object.keys(languages).map(item => (
                                <li key={item}>{languages[item]}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='col'>
                        <div className='float-md-end'>
                            <p className='mb-2'><span className='fw-semibold'>Latitude and Longitude: </span>{latlng.join(', ')}</p>
                            <p className='mb-2'><span className='fw-semibold'>Area: </span>{area} km<sup>2</sup></p>
                            <p className='fw-semibold mb-2'>Borders:</p>
                            <ul>
                                {Object.keys(borders).map(item => (
                                    <li key={borders[item]}>{borders[item]}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col'>
                        <p className='mb-2'><span className='fw-semibold'>Car side: </span>{car['side']}</p>
                        <p className='mb-2'><span className='fw-semibold'>Start of week: </span>{startOfWeek}</p>
                        <p className='fw-semibold mb-1'>Maps:</p>
                        <ul>
                            {Object.keys(maps).map(item => (
                                <li key={item}><a href={maps[item]} rel='noreferrer' target='_blank' className='text-decoration-underline text-secondary'>{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className='col'>
                        <div className='float-md-end me-md-5'>
                            <p className='mb-2'><span className='fw-semibold'>Population: </span>{population}</p>
                            <p className='fw-semibold mb-2'>Timezones:</p>
                            <ul>
                                {Object.keys(timezones).map(item => (
                                    <li key={timezones[item]}>{timezones[item]}</li>
                                ))}
                            </ul>
                            <p className='fw-semibold mb-1'>Currencies:</p>
                            <ul>
                                {Object.keys(currencies).map(item => (
                                    <li key={item}>{currencies[item]['name']}({currencies[item]['symbol']})</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryView
