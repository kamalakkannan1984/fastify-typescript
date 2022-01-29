import fastify, { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import _  from "underscore";
const server: FastifyInstance<
Server, IncomingMessage, ServerResponse
> = fastify({
  logger : true
});

function build() {
  server.get('/ping', async (reuest, reply) =>  {
    return 'pong\n';
  });

  server.post('/login', async (request, reply) => {
      const body: any = request.body || {};
      if(_.isEmpty(body)){
          reply.code(422).send({ statusCode: 422, message : "Request should not be empty"});
      }else{
          reply.code(200).send({statusCode: 200, result: body});
      }

  })
  return server;
}
export default build;
