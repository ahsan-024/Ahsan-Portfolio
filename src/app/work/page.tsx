import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { ProjectGrid } from "@/components/work/ProjectGrid";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="l" gap="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" paddingX="l" gap="8" marginBottom="s">
        <Heading variant="display-strong-s">Projects</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Backend-heavy PHP, Laravel and MySQL work — ERP reporting, multi-tenant
          products and legacy modernisation.
        </Text>
      </Column>
      <ProjectGrid />
    </Column>
  );
}
