export const getCredentials = ({ username, password }) => ({ username, password })
export const eventTitles = ({ eventTitle, headerTwo }) => ({ eventTitle, headerTwo })
export const eventDetails = ({ date, time, location, description }) => ({ date, time, location, description })
export const eventInvites = ({ inviteeName, inviteeEmail }) => ({ inviteeName, inviteeEmail })
export const eventMenu = ({ category, dishName, userOfDish }) => ({ category, dishName, userOfDish })

// pick function in Ramda 
