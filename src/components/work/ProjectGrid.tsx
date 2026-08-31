import { getPosts } from "@/app/utils/utils";
import { Card, Column, Flex, Grid, Heading, SmartImage, Tag, Text } from "@/once-ui/components";

interface ProjectGridProps {
  range?: [number, number?];
}

export function ProjectGrid({ range }: ProjectGridProps) {
  const sorted = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const projects = range
    ? sorted.slice(range[0] - 1, range[1] ?? sorted.length)
    : sorted;

  return (
    <Grid columns="2" tabletColumns="2" mobileColumns="1" gap="24" fillWidth paddingX="l">
      {projects.map((post) => {
        const year = new Date(post.metadata.publishedAt).getFullYear();
        return (
          <Card
            key={post.slug}
            href={`/work/${post.slug}`}
            radius="l"
            direction="column"
            fillWidth
            padding="0"
            gap="0"
            overflow="hidden"
          >
            {post.metadata.images?.[0] && (
              <SmartImage
                aspectRatio="16 / 9"
                sizes="(max-width: 960px) 100vw, 480px"
                alt={`${post.metadata.title} — screenshot`}
                src={post.metadata.images[0]}
              />
            )}
            <Column fillWidth padding="20" gap="12">
              <Flex fillWidth horizontal="space-between" vertical="center" gap="8">
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {year}
                </Text>
                {post.metadata.tag && (
                  <Tag size="s" variant="neutral" label={post.metadata.tag} />
                )}
              </Flex>
              <Heading as="h2" variant="heading-strong-m" wrap="balance">
                {post.metadata.title}
              </Heading>
              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.metadata.summary}
              </Text>
              {post.metadata.tech?.length > 0 && (
                <Flex gap="8" wrap paddingTop="4">
                  {post.metadata.tech.slice(0, 4).map((item) => (
                    <Tag key={item} size="s" variant="neutral" label={item} />
                  ))}
                </Flex>
              )}
            </Column>
          </Card>
        );
      })}
    </Grid>
  );
}
