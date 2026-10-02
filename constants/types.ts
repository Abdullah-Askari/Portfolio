export type AlertType = 'danger' | 'success';
import type { ThreeElements } from '@react-three/fiber';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { Bone, Material, SkinnedMesh } from 'three';
import type { RefObject } from 'react';
import type { MotionStyle } from 'motion/react';
import type { HTMLAttributes, ReactNode } from 'react';
import type { COBEOptions } from 'cobe';

export interface AlertProps {
    type: AlertType;
    text: string;
}

export interface FlipWordsProps {
    words: string[];
    duration?: number;
    className?: string;
}

export interface CardProps {
    style?: MotionStyle;
    text?: string;
    image?: string;
    containerRef: RefObject<HTMLElement | null>;
}

export interface NavItem {
    name: string;
    href: string;
}

export interface ProjectTag {
    id: number;
    name: string;
    path: string;
}

export interface ProjectDetailsProps {
    title: string;
    description: string;
    image: string;
    tags: ProjectTag[];
    href: string;
    closeModal: () => void;
}

export interface ProjectProps {
    title: string;
    description: string;
    href: string;
    image: string;
    tags: ProjectTag[];
    setPreview: (image: string | null) => void;
    index?: number;
}

export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    href: string;
    logo?: string;
    image: string;
    tags: ProjectTag[];
}

export interface IconProps {
    src: string;
}

export interface GlobeProps {
    className?: string;
    config?: Partial<COBEOptions>;
}

export interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    reverse?: boolean;
    duration?: number;
    radius?: number;
    path?: boolean;
    iconSize?: number;
    speed?: number;
}

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
}

export interface TimelineItem {
    id?: number;
    date: string;
    title: string;
    job: string;
    contents: string[];
}

export interface TimelineProps {
    data: TimelineItem[];
}

export interface ExperienceItem {
    id?: number;
    date: string;
    title: string;
    job: string;
    contents: string[];
}

export interface SocialItem {
    name: string;
    href: string;
    icon: string;
}

export interface Particle {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
}

export interface ParticlesProps extends HTMLAttributes<HTMLDivElement> {
    quantity?: number;
    staticity?: number;
    ease?: number;
    size?: number;
    refresh?: boolean;
    color?: string;
    vx?: number;
    vy?: number;
}

export type AstronautProps = ThreeElements['group'];

export interface AstronautGLTF extends GLTF {
    nodes: {
        metarig_rootJoint: Bone;
        Cube001_0: SkinnedMesh;
        Cube005_0: SkinnedMesh;
        Cube002_0: SkinnedMesh;
        Plane_0: SkinnedMesh;
        Cube008_0: SkinnedMesh;
        Cube004_0: SkinnedMesh;
        Cube003_0: SkinnedMesh;
        Cube_0: SkinnedMesh;
        Cube009_0: SkinnedMesh;
        Cube011_0: SkinnedMesh;
    };
    materials: {
        'AstronautFallingTexture.png': Material;
    };
}

export interface CopyEmailButtonProps {
    className?: string;
    email?: string;
}

export interface MailButtonProps {
    className?: string;
    email?: string;
    text?: string;
}

export interface HeroModelProps {
    isAnimated?: boolean;
    scale?: number;
    position?: [number, number, number];
}

export interface Star {
    x: string;
    y: string;
    size: number;
    opacity: number;
}