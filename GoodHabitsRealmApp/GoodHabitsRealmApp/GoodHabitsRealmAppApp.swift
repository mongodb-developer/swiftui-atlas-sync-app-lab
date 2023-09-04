//
//  GoodHabitsRealmAppApp.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import SwiftUI
import RealmSwift

@main
struct GoodHabitsRealmAppApp: SwiftUI.App {
    var config = Realm.Configuration.defaultConfiguration

    init() {
        config.schemaVersion = 2
    }

    var body: some Scene {
        WindowGroup {
            MainView()
                .environment(\.realmConfiguration, config)
        }
    }
}
