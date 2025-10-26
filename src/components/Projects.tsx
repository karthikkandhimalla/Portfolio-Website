import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
      tags: ["Next.js", "TypeScript", "Supabase"],
      link: "#"
    },
    {
      title: "Portfolio CMS",
      description: "Custom content management system for photographers and artists to showcase their work beautifully.",
      tags: ["React", "GraphQL", "MongoDB"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with custom visualizations and data export capabilities.",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="hover:shadow-medium transition-all cursor-pointer group shadow-soft border-border"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
