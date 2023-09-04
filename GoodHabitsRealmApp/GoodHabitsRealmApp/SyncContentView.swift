//
//  SyncContentView.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 4/9/23.
//

import SwiftUI
import RealmSwift

struct SyncContentView: View {
    @ObservedObject var app: RealmSwift.App

    var body: some View {
        if let user = app.currentUser {
            let config = user.flexibleSyncConfiguration { subs in

                if let foundSubscription = subs.first(named: "user_days") {
                    return
                } else {
                    subs.append(QuerySubscription<Days>(name: "user_days", query: {
                        $0.ownerId == user.id
                    }))
                    subs.append(QuerySubscription<Day>())

                    subs.append(QuerySubscription<Habits>(name: "user_habits", query: {
                        $0.ownerId == user.id
                    }))
                    subs.append(QuerySubscription<Habit>())
                }
            }

            OpenSyncedRealmView(app: app)
                .environment(\.realmConfiguration, config)
        } else {
            ProgressView()
                .task {
                    do {
                        let myUser = try await app.login(credentials: .anonymous)
                    } catch {
                        print("\(error)")
                    }
                }
        }

    }
}

struct SyncContentView_Previews: PreviewProvider {
    static var previews: some View {
        SyncContentView(app: RealmSwift.App(id: ""))
    }
}
