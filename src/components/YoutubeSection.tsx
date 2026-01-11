
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube } from "lucide-react";

const YouTubeSection = ({ videoId, title }: { videoId: string, title: string }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-xl md:text-2xl text-foreground">
            <Youtube className="mr-3 h-6 w-6 text-primary" />
            {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
            ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default YouTubeSection;
