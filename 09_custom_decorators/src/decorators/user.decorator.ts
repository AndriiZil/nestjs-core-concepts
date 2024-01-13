import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const usersData = {
  id: 101,
  firstName: 'Alan',
  lastName: 'Turing',
  email: 'alan@email.com',
  roles: ['admin'],
};

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user || usersData;

    return data ? user?.[data] : user;
  },
);
