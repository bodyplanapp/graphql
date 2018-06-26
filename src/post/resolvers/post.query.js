const Query = {
  posts: (_, args, context, info) => {
    return context.prisma.query.posts(
      {
        where: {
          OR: [
            { title_contains: args.searchString },
            { content_contains: args.searchString },
          ],
        },
      },
      info,
    )
  }
}
module.exports = { Query }