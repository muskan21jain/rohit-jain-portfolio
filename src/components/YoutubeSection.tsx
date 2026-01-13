import { PlayCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface YouTubeSectionProps {
  videoId: string;
  title?: string;
  description?: string;
}

export default function YouTubeSection({
  videoId,
  title = "Featured YouTube Video",
  description = "Click below to watch the full video on YouTube. Age verification may be required.",
}: YouTubeSectionProps) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-xl md:text-2xl">
          <PlayCircle className="mr-3 h-6 w-6 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Thumbnail */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-lg overflow-hidden border"
          aria-label="Watch video on YouTube"
        >
          <img
            src={thumbnailUrl}
            alt="YouTube video thumbnail"
            className="w-full aspect-video object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition">
            <PlayCircle className="h-16 w-16 text-white opacity-90" />
          </div>
        </a>

        {/* Description */}
        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        {/* Action link */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Watch on YouTube
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground italic">
          *This video may require age verification on YouTube.*
        </p>
      </CardContent>
    </Card>
  );
}
