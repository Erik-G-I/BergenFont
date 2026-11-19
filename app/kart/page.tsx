import { supabasePublic } from '@/lib/supabase/public'
import BergenMap from '@/app/components/BergenMap';



// Sample data for map markers
export interface Location {
    id: string;
    title: string;
    address: string | null;
    image_url: string | null;
    latitude: number;
    longitude: number;
}


export default async function MapPage() {
    'use cache'

    const supabase = supabasePublic;
    const { data: locations, error } = await supabase
        .from('FontLocations')
        .select('id, title, address, image_url, latitude, longitude');

    if (error) {
        console.error('Error fetching locations:', error.message);
        return <div className="p-4">Failed to load locations.</div>;
    }
    return (
        <main className="h-full --color-background">
            <div className="w-full">
                <BergenMap locations={locations ?? []} />
                {/* <TestMap /> */}
            </div>
        </main>
    );
}