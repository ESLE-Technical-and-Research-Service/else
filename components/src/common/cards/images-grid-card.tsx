import {Service} from "../../types/Service";
import {Language} from "../../types";
import React, {RefObject} from "react";
import {ImagesGridLayout} from "../../types/ImagesGridLayout";
import CarouselLayout from "./imagesLayouts/carousel-layout";
import MasonryLayout from "./imagesLayouts/masonry-layout";
import ColOrRowLayout from "./imagesLayouts/col-or-row-layout";
import MixLayout from "./imagesLayouts/mix-layout";
import QuiltedLayout from "./imagesLayouts/quilted-layout";

type ImagesGridCardProps = {
    service: Service;
    language: Language;
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
        service,
        language,
        isInCenter,
        layoutType,
        articleRef,
        scaleValue,
        columns = 2,
        limit = service.images.length,
        startIndex = 0,
    } = props;

    const imageAlt = language === 'PL' ? service.name.namePL : service.name.nameENG;

    switch (layoutType) {
        case ImagesGridLayout.COLUMN:
            return <ColOrRowLayout
                direction={ImagesGridLayout.COLUMN}
                images={service.images}
                imageAlt={imageAlt}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />
        case ImagesGridLayout.ROW:
            return <ColOrRowLayout
                direction={ImagesGridLayout.ROW}
                images={service.images}
                imageAlt={imageAlt}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />
        case ImagesGridLayout.MIX:
            return <MixLayout
                images={service.images}
                imageAlt={imageAlt}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
                columns={columns}
            />
        case ImagesGridLayout.MASONRY:
            return <MasonryLayout
                images={service.images}
                imageAlt={imageAlt}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
                columns={columns}
            />;
        case ImagesGridLayout.CAROUSEL:
            return <CarouselLayout
                images={service.images}
                imageAlt={imageAlt}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />;
        case ImagesGridLayout.QUILTED:
            return <QuiltedLayout
                images={service.images}
                imageAlt={imageAlt}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />
        default:
            return <ColOrRowLayout
                direction={ImagesGridLayout.COLUMN}
                images={service.images}
                imageAlt={imageAlt}
                articleRef={articleRef}
                isInCenter={isInCenter}
                scaleValue={scaleValue}
                limit={limit}
                startIndex={startIndex}
            />
    }
}
