const resolver = {
    user: (_, args, context, info) => {
        return context.prisma.query.user(
            {
                where: {
                    id: args.id,
                },
            },
            info,
        )
    },
    signup: (_, args, context, info) => {
        return context.prisma.mutation.createUser(
            {
                data: {
                    name: args.name,
                },
            },
            info,
        )
    }
}

module.exports = { resolver }