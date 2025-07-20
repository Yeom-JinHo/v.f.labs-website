import type { ArtistProfile } from "@/types/artist";
import Link from "next/link";
import {
  MorphingDialog as Dialog,
  MorphingDialogClose as DialogClose,
  MorphingDialogContainer as DialogContainer,
  MorphingDialogContent as DialogContent,
  MorphingDialogDescription as DialogDescription,
  MorphingDialogImage as DialogImage,
  MorphingDialogSubtitle as DialogSubtitle,
  MorphingDialogTitle as DialogTitle,
  MorphingDialogTrigger as DialogTrigger,
} from "@/components/fancy/morphing-dialog";
import TextReveal from "@/components/fancy/text-reveal";
import { MemoizedReactMarkdown } from "@/components/markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { cn } from "@repo/ui";
import { Button } from "@repo/ui/button";

interface ArtistCardProps extends ArtistProfile {
  index: number;
  className?: string;
}

// todo: use text reveal for name and description
// todo: use motion-primitives text-reveal
export default function ArtistCard({
  name,
  nickname,
  shortDescription,
  image,
  className,
}: ArtistCardProps) {
  return (
    <Dialog
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className={cn(
          "flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900",
          className,
        )}
      >
        <DialogImage
          src={image ?? "/placeholder.svg"}
          alt={`${name} profile image`}
          className="h-[300px] w-full object-cover md:h-[720px]"
        />
        <div className="l:p-6 flex grow flex-col items-end justify-between gap-4 p-4">
          <div className="flex w-full flex-col gap-2">
            <DialogTitle className="l:text-3xl text-2xl leading-8 font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              <TextReveal>{name}</TextReveal>
            </DialogTitle>
            <DialogSubtitle className="text-md text-muted-foreground text-zinc-700 dark:text-zinc-400">
              <TextReveal>@{nickname ?? ""}</TextReveal>
            </DialogSubtitle>
          </div>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full basis-1/2 flex-col overflow-hidden border border-zinc-950/10 bg-white xl:basis-1/4 dark:border-zinc-50/10 dark:bg-zinc-900"
        >
          <DialogImage
            src={image ?? "/placeholder.svg"}
            alt={`An image which depicts the skill (${name})`}
            className="h-[300px] w-full object-cover md:h-[600px]"
          />
          <div className="flex flex-col gap-2 p-6">
            <DialogTitle className="text-3xl leading-8 font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              {name}
            </DialogTitle>
            <DialogDescription
              className="text-md text-muted-foreground text-zinc-700 dark:text-zinc-400"
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
              }}
            >
              <MemoizedReactMarkdown
                className="dark:prose-invert prose text-muted-foreground prose-p:leading-relaxed prose-pre:p-0 min-w-full break-words"
                remarkPlugins={[remarkGfm, remarkMath]}
                components={{
                  p({ children }) {
                    return <p className="mb-2 last:mb-0">{children}</p>;
                  },
                }}
              >
                {shortDescription}
              </MemoizedReactMarkdown>
            </DialogDescription>
          </div>
          <div className="flex justify-center p-6">
            <Button asChild className="w-full font-bold">
              <Link href={`artist/${name}`}>자세히보기</Link>
            </Button>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
