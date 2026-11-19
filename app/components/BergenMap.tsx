'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Location } from '@/app/kart/page';

interface MapProps {
    locations: Location[];
}

const LIGHT_STYLE = 'mapbox://styles/erikgi/cmuzkwqmd000301r71137cm88';
const DARK_STYLE = 'mapbox://styles/erikgi/cmuzl0rbq000301sg0j6a3sh5';

export default function BergenMap({ locations }: MapProps) {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const currentStyleRef = useRef<string | null>(null);
    const [mapStyle, setMapStyle] = useState(() => {
        if (typeof window === 'undefined') {
            return DARK_STYLE;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_STYLE : LIGHT_STYLE;
    });
    const desiredStyleRef = useRef(mapStyle);

    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event: MediaQueryListEvent) => {
            setMapStyle(event.matches ? DARK_STYLE : LIGHT_STYLE);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const container = mapContainerRef.current;
        if (!container || !mapboxToken) return;

        const map = new mapboxgl.Map({
            accessToken: mapboxToken,
            container,
            center: [5.328670812370576, 60.385],
            zoom: 13,
            style: desiredStyleRef.current,
            language: 'nb',
        });
        mapRef.current = map;
        currentStyleRef.current = desiredStyleRef.current;
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        const markers: mapboxgl.Marker[] = [];
        let activePopup: mapboxgl.Popup | null = null;

        for (const location of locations) {
            const markerElement = document.createElement('div');
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'block cursor-pointer border-0 bg-transparent p-0 text-2xl transition-transform hover:scale-125 focus:outline-none';
            button.setAttribute('aria-label', location.title);

            const sign = document.createElement('img');
            sign.src = '/BergenFontSign.svg';
            sign.alt = location.title;
            sign.width = 70;
            sign.height = 26;
            button.appendChild(sign);
            markerElement.appendChild(button);

            button.addEventListener('click', (event) => {
                event.stopPropagation();
                activePopup?.remove();

                const content = document.createElement('div');
                content.className = 'relative overflow-hidden rounded-xl bg-white shadow-xl h-50 w-30 sm:h-60 sm:w-full';

                const closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.className = 'absolute top-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70';
                closeButton.setAttribute('aria-label', 'Close');
                closeButton.textContent = '✕';
                closeButton.addEventListener('click', () => activePopup?.remove());
                content.appendChild(closeButton);

                const imageHeader = document.createElement('div');
                imageHeader.className = 'relative h-25 w-30 sm:h-40 sm:w-full';
                if (location.image_url) {
                    const image = document.createElement('img');
                    image.src = location.image_url;
                    image.alt = location.title;
                    image.className = 'h-full w-full object-cover';
                    imageHeader.appendChild(image);
                }

                const gradient = document.createElement('div');
                gradient.className = 'absolute inset-0 bg-gradient-to-t from-black/60 to-transparent';
                imageHeader.appendChild(gradient);
                content.appendChild(imageHeader);

                const body = document.createElement('div');
                body.className = 'p-4';

                const title = document.createElement('h3');
                title.className = 'text-base font-bold text-gray-900';
                title.textContent = location.title;
                body.appendChild(title);

                const address = document.createElement('p');
                address.className = 'mt-1 text-xs text-gray-500 line-clamp-2';
                address.textContent = location.address ?? '';
                body.appendChild(address);
                content.appendChild(body);

                const popup = new mapboxgl.Popup({
                    anchor: 'bottom',
                    offset: 15,
                    closeOnClick: false,
                    closeButton: false,
                    maxWidth: '300px',
                })
                    .setLngLat([location.longitude, location.latitude])
                    .setDOMContent(content)
                    .addTo(map);
                activePopup = popup;
                popup.on('close', () => {
                    if (activePopup === popup) activePopup = null;
                });
            });

            markers.push(
                new mapboxgl.Marker({ element: markerElement, anchor: 'bottom' })
                    .setLngLat([location.longitude, location.latitude])
                    .addTo(map),
            );
        }

        return () => {
            activePopup?.remove();
            markers.forEach((marker) => marker.remove());
            map.remove();
            if (mapRef.current === map) mapRef.current = null;
        };
    }, [locations, mapboxToken]);

    useEffect(() => {
        desiredStyleRef.current = mapStyle;
        if (!mapRef.current || currentStyleRef.current === mapStyle) return;

        mapRef.current.setStyle(mapStyle);
        currentStyleRef.current = mapStyle;
    }, [mapStyle]);

    if (!mapboxToken) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#FF665E] text-red-500">
                Mapbox Access Token is missing. Add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local
            </div>
        );
    }

    return (
        <div className="h-screen w-full">
            <div ref={mapContainerRef} className="h-full w-full" />
        </div>
    );
}
