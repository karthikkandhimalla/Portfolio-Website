const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Hello! I'm a passionate developer with a keen eye for design and a love for creating 
            elegant solutions to complex problems. With years of experience in web development, 
            I've worked on projects ranging from small business websites to large-scale applications.
          </p>
          
          <p>
            My approach combines technical expertise with creative thinking. I believe that great 
            software should not only work flawlessly but also provide an exceptional user experience. 
            Every line of code I write is focused on achieving both of these goals.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open 
            source projects, or sharing my knowledge through blog posts and mentoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
