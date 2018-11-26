
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Broadcast Messages .
 */
class BroadcastMessages extends ModelBase {

     /**
     * Create Broadcast Messages .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * The broadcast message API is only accessible to administrators. All requests by
guests will respond with 401 Unauthorized, and all requests by normal users
will respond with 403 Forbidden..

     * @param params {object}
     * @returns {*}
     */

    broadcastMessagesApi(params) {
        return this.http.get(`/broadcast_messages`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @param params.id {integer} - Broadcast message ID
     * @returns {*}
     */

    getAllBroadcastMessages(params) {
        return this.http.get(`/broadcast_messages`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param id {integer} - Broadcast message ID
     * @param params {object}
     * @returns {*}
     */

    getASpecificBroadcastMessage(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/broadcast_messages/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param params {object}
     * @param params.message {string} - Message to display
     * @param params.starts_at {datetime} - Starting time (defaults to current time)
     * @param params.ends_at {datetime} - Ending time (defaults to one hour from current time)
     * @param params.color {string} - Background color hex code
     * @param params.font {string} - Foreground color hex code
     * @returns {*}
     */

    createABroadcastMessage(params) {
        return this.http.post(`/broadcast_messages`, params); // eslint-disable-line quotes
    }

    /**
     * Example response:.

     * @param id {integer} - Broadcast message ID
     * @param params {object}
     * @param params.message {string} - Message to display
     * @param params.starts_at {datetime} - Starting time
     * @param params.ends_at {datetime} - Ending time
     * @param params.color {string} - Background color hex code
     * @param params.font {string} - Foreground color hex code
     * @returns {*}
     */

    updateABroadcastMessage(id, params) { // eslint-disable-line camelcase
        return this.http.put(`/broadcast_messages/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

    /**
     * .

     * @param id {integer} - Broadcast message ID
     * @param params {object}
     * @returns {*}
     */

    deleteABroadcastMessage(id, params) { // eslint-disable-line camelcase
        return this.http.delete(`/broadcast_messages/${encodeURIComponent(id)}`, params); // eslint-disable-line quotes
    }

}

module.exports = BroadcastMessages;

