export const selectOption =[
    {   id:1,
        title:'Just Me',
        desc:'A sole Traveles is In Exploration',
        icon:'🛩️',
        people:'single'
    },
    {   id:2,
        title:'Couples',
        desc:'A Couples Traveles is In Exploration',
        icon:'🍻',
        people:'2 People'
    },
    {   id:3,
        title:'Family',
        desc:'A Family Traveles is In Exploration',
        icon:'🏡',
        people:'2 to 5 People'
    },
    {   id:4,
        title:'Friends',
        desc:'A Friends Traveles is In Exploration',
        icon:'🚤',
        people:'5 to 10 People'
    },
] 



export const spendList = [
    {
        id:1,
        title:'Cheap',
        desc:'Cheap travel plans  affordable',
        icon:'🪙',
       
    },
    {
        id:2,
        title:'Expensive',
        desc:'Expensive travel plans  affordable',
        icon:'💵',
       
    },
    {
        id:3,
        title:'Luxary',
        desc:'Luxary travel plans affordable',
        icon:'💰',
       
    },
]


export const AI_PROMPT="Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNights} Night for {traveler} with a {budget}\nbudget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName,\nHotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit\nnearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t\ntravel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON"