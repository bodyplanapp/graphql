
const Query = {
    user: (_, args, context, info) => {
        return context.prisma.query.user(
            {
                where: {
                    id: args.id,
                },
            },
            info,
        )
    }
}

module.exports = { Query }
