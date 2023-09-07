import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia/client';

export const load = (async () => {
    // const allUsers = await db.select().from(user);
    return { };
}) satisfies PageServerLoad;

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        const username = data.get('username') as string;
        console.log("🚀 ~ file: +page.server.ts:13 ~ create: ~ username:", username)
        const password = data.get('password') as string;
        console.log("🚀 ~ file: +page.server.ts:15 ~ create: ~ password:", password)
        // const phone = data.get('phone');
        if (!username) {
           throw new Error("Name can not be empty");
        }
        
        try {
            const user = await auth.createUser({
                key: {
                  providerId: "username",
                  providerUserId: username,
                  password
                },
                attributes: {
                  username: username,
                },
              });
           
        } catch (error) {
            console.error("Error Now", error);
        }
    },
   
  };