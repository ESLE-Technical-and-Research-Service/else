import React, {RefObject} from "react";
import {ContentModel, ImagesGridLayout} from "../../types";
import CarouselLayout from "./imagesLayouts/carousel-layout";
import MasonryLayout from "./imagesLayouts/masonry-layout";
import ColOrRowLayout from "./imagesLayouts/col-or-row-layout";
import MixLayout from "./imagesLayouts/mix-layout";
import QuiltedLayout from "./imagesLayouts/quilted-layout";

type ImagesGridCardProps = {
    content: ContentModel;
    isInCenter: boolean;
    layoutType: ImagesGridLayout;
    articleRef: RefObject<HTMLDivElement | null>;
    scaleValue: number;
    columns?: number;
    limit?: number;
    startIndex?: number;
};

export default function ImagesGridCard(props: ImagesGridCardProps) {
    const {
        content,
        isInCenter,
        layoutType,
        articleRef,
        scaleValue,
        columns = 2,
        limit = content.images?.length || 0,
        startIndex = 0,
    } = props;

    switch (layoutType) {
        case ImagesGridLayout.COLUMN:
            return <ColOrRowLayout
                direction={ImagesGridLayout.COLUMN}
                images={content.images || []}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />
        case ImagesGridLayout.ROW:
            return <ColOrRowLayout
                direction={ImagesGridLayout.ROW}
                images={content.images || []}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />
        case ImagesGridLayout.MIX:
            return <MixLayout
                images={content.images || []}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
                columns={columns}
            />
        case ImagesGridLayout.MASONRY:
            return <MasonryLayout
                images={content.images || []}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
                columns={columns}
            />;
        case ImagesGridLayout.CAROUSEL:
            return <CarouselLayout
                images={content.images || []}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />;
        case ImagesGridLayout.QUILTED:
            return <QuiltedLayout
                images={content.images || []}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />
        default:
            return <ColOrRowLayout
                direction={ImagesGridLayout.COLUMN}
                images={content.images || []}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />
    }
}
