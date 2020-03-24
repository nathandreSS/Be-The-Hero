const connection = require('../database/connection');

module.exports = {
    async listEspecificForOng(request, response) {
        const ong_id = request.headers.authorization;
        const incidents = await connection('incident').where('ong_id', ong_id).select('*');
        return response.json(incidents);
    },
}